import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClrDatagridComparatorInterface } from "@clr/angular";
import { ClrDatagridStringFilterInterface } from "@clr/angular";
import {IPathogen} from '../../datamodels/pathogen';
import {PathogenDataService} from '../../services/pathogen.data.service'

@Component({
  selector: 'app-list-pathogen',
  templateUrl: './list-pathogen.component.html',
  styleUrls: ['./list-pathogen.component.css']
})
export class ListPathogenComponent implements OnInit {

  pathogens:IPathogen[] = [];
  showDetail: boolean = false;
  currentPathogen:IPathogen = {commonName:"", scientificName:"", family:"", clinicalSymptoms:"", viralFactor:"", genomeSequence:"", annotation:""};
  currentSequence: string;

  public pfComparator = new PFComparator();
    public clinicalSymptomsFilter = new ClinicalSymptomsFilter();

  constructor(private dataService: PathogenDataService, private router: Router) {
    this.pathogens = dataService.LoadPathogens();
    console.log(JSON.stringify(this.pathogens));
  }

  ngOnInit(): void {
  }

  reset() {
    this.showDetail = false;
    this.router.navigateByUrl('/list');
    this.pathogens = this.dataService.LoadPathogens();
    this.currentPathogen = {commonName:"", scientificName:"", family:"", clinicalSymptoms:"", viralFactor:"", genomeSequence:"", annotation:""};
  }

  search(type: number, searchPhrase: string) {
    this.pathogens = this.dataService.LoadPathogens().filter(pathogen => {
      if (type === 1 ) { //commonName
         return (pathogen.commonName === searchPhrase);
      }
      if (type === 2) { //GenomeSequence
        return (pathogen.genomeSequence.toString() === searchPhrase)
      }
    });
  }

  showDetails(pathogen: IPathogen)
  {
    this.showDetail = true;
    this.currentPathogen = pathogen;
    this.currentSequence = this.currentPathogen.genomeSequence;
  }

  add()
  {
    this.router.navigateByUrl('/add');
  }

  getPlaceholderSequence(pathogen: IPathogen): string {
    if (pathogen && pathogen.genomeSequence) {
      if (pathogen.genomeSequence.length > 20)
        return `${pathogen.genomeSequence.substring(0, 17)}...`;
      else {
        return pathogen.genomeSequence.substring(0, 20);
      }
    }
    else {
      return "";
    }
  }

 
  save() {
    if(this.currentPathogen.commonName.length == 0 ||
       this.currentPathogen.scientificName.length == 0 ||
       this.currentPathogen.family.length == 0 ||
       this.currentPathogen.clinicalSymptoms.length == 0 ||
       this.currentPathogen.genomeSequence.length == 0) {
       alert("Please specify pathogen common name, scientific name, family, viral factor, clinical symptoms and genome sequence.");
    } else {
       this.dataService.updatePathogen(this.currentPathogen, this.currentSequence);
       this.reset();  
    }
  }
}

export class PFComparator implements ClrDatagridComparatorInterface<IPathogen> {
  compare(a: IPathogen, b: IPathogen) {
    return a.family.localeCompare(b.family);
  } 
}

export class ClinicalSymptomsFilter implements ClrDatagridStringFilterInterface<IPathogen> {
  accepts(a: IPathogen, search: string): boolean {
    return a.clinicalSymptoms.toLowerCase().indexOf(search) >= 0;
  }
}
