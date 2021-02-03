# Service Design


## REST API design:

1. Getting list of pathogens

* Get all pathogen records: 
        
        VERB: GET 
        URI: /api/*version*/pathogens

* Get records (common name search):  
        
        VERB: GET 
        URI: /api/*version*/pathogens?commonname=namevalue 
        
        and
        
        URI: /api/*version*/pathogens/commonName

* Get records (sequence search):  
    
        VERB: GET 
        URI: /api/*version*/pathogens?genomesequence=sequencevalue 

**Note**: Sequence value will have a limit based on URL size limitation of 2048 charaters.
If this is a concern, we might use a substring match to get a subset of pathogens which match the query parameter, or switch to a POST request with the genome sequence in the payload

* Get paginated results:
    
        VERB: GET 
        URI: /api/*version*/pathogens?pagenumber=pageNumber&pageSize=pagesize

* Get paginated results for a commonName search (multiple query parameters):
        VERB: GET
        URI: /api/*version*/pathogens?commonname=namevalue&pagenumber=pageNumber&pageSize=pagesize


2. Create a  new Pathogen record

        VERB: POST
        URI: /api/*version*/pathogens
  
  Required fields: 
    * common name, 
    * scientific name, 
    * genome sequence(provided in a text file)
  
  Optional fields:
    * family (bacteria, virus, fungi, etc.), 
    * viral factor, 
    * clinical symptoms,
    * annotation,
 
3. To update an existing pathogen resource

* Update an existing resource by **CommonName**

        VERB: PUT 
        URI: /api/*version*/pathogens/commonname
* Updateable fields:
    * scientificName: string,
    * family?: string,
    * viralFactor?:string,
    * clinicalSymptoms?: string,
    * annotation?: string

* Update an existing resource by **genomic Sequence**
  
        VERB: PUT 
        URI: /api/*version*/pathogens/genomicsequnce
        BODY: Pathogen genomic sequence
* Updateable fields:
    * scientificName: string,
    * family?: string,
    * viralFactor?:string,
    * clinicalSymptoms?: string,
    * annotation?: string

4. To Delete an existing pathogen resource

* DELELE an existing resource by **CommonName**

        VERB: PUT 
        URI: /api/*version*/pathogens/commonname

* DELELE an existing resource by **Genomic Sequence**

        VERB: DELETE
        URI:  /api/*version*/pathogens/genomicsequence
        BODY: Pathogen genomic sequence