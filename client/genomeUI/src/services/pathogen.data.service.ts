import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {IPathogen} from '../datamodels/pathogen';
import { throwError } from 'rxjs';



@Injectable()
export class PathogenDataService  {

    private static pathogens: IPathogen[] = [
       
        {commonName:"p1", scientificName:"ps1", family:"virus", clinicalSymptoms:"n/a", viralFactor:"adhesion", genomeSequence:"AAGCTGCAGGCCTGTC", annotation:"Airborne Transmission"},
        {commonName:"p2", scientificName:"ps2", family:"bacteria", clinicalSymptoms:"fever", viralFactor:"adhesion", genomeSequence:"GCTGCAGGCCTGTCAA", annotation:"Airborne Transmission"},
        {commonName:"p3", scientificName:"ps3", family:"unknown", clinicalSymptoms:"cough", viralFactor:"exoenzymes", genomeSequence:"AGCTGCAGGCCTGTCC"},
        {commonName:"p4", scientificName:"ps4", family:"fungi", clinicalSymptoms:"aches", viralFactor:"exoenzymes", genomeSequence:"CTGCAGGCCTGTCGTC", annotation:"Food Transmission"},
        {commonName:"p5", scientificName:"ps5", family:"bacteria", clinicalSymptoms:"asymptomatic", viralFactor:"exoenzymes", genomeSequence:"TGCAGGCCTGTCAACC", annotation:"Food Transmission"}
       
    ]; 

    constructor(private httpC: HttpClient, public router: Router) {
     
    }

    LoadPathogens(): any {
        return PathogenDataService.pathogens;
      }

      createNewPathogen(newPathogen: IPathogen) {
        PathogenDataService.pathogens.unshift(newPathogen);
      }

      updatePathogen(updatedPathogen: IPathogen, currentSequence: string) {
        PathogenDataService.pathogens = PathogenDataService.pathogens.map( pathogen => {
          if (pathogen.genomeSequence === currentSequence) {
            return updatedPathogen;
          } else {
            return pathogen;
          }
        }); 

      }
}