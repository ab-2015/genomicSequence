
/**
    pathogen information such as 
    common name, 
    scientific name, 
    family (bacteria, virus, fungi, etc.), 
    viral factor, 
    clinical symptoms,
    annotation,
    genome sequence(provided in a text file)
**/

export interface IPathogen {
    commonName: string,
    scientificName: string,
    family?: string,
    viralFactor?:string,
    clinicalSymptoms?: string,
    genomeSequence: any,
    annotation?: string
}