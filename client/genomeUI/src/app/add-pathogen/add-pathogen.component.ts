import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPathogen } from '../../datamodels/pathogen';
import {PathogenDataService} from '../../services/pathogen.data.service'

@Component({
  selector: 'app-add-pathogen',
  templateUrl: './add-pathogen.component.html',
  styleUrls: ['./add-pathogen.component.css']
})
export class AddPathogenComponent implements OnInit {

  newPathogen: IPathogen;

  constructor(private dataService: PathogenDataService, private router: Router) { 
    this.newPathogen = {commonName:"", scientificName:"", family:"", clinicalSymptoms:"", genomeSequence:""};
  }

  ngOnInit(): void {
  }

  importGenomeSequence(event) {
    let genomeSequenceFile = event.target.files[0];
    // Now read the contents of the file
    let fileReader = new FileReader();
    
    fileReader.readAsText(genomeSequenceFile);

    fileReader.onload = (e) => {
        this.newPathogen.genomeSequence = fileReader.result.toString();
    }
  }

  save() {
    if(this.newPathogen.commonName.length == 0 ||
       this.newPathogen.scientificName.length == 0 ||
       this.newPathogen.family.length == 0 ||
       this.newPathogen.clinicalSymptoms.length == 0 ||
       this.newPathogen.genomeSequence.length == 0) {
       alert("Please specify pathogen common name, scientific name, family, viral factor, clinical symptoms and genome sequence.");
    } else {
       this.dataService.createNewPathogen(this.newPathogen);
       this.router.navigateByUrl('/list');
    }
  }

  cancel() {
    this.newPathogen = {commonName:"", scientificName:"", family:"", clinicalSymptoms:"", genomeSequence:""};
    this.router.navigateByUrl('/list');
  }

}
