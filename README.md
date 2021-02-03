# GenomeUI Assignment

# Folders:
## client 
1. Entry point for all client code.  
2. A sample Angular impelemntation is at *client/genomeUI*

## Service 
1. Service API design is at [servicedesign.md](./server/servicedesign.md)


# Running the Development server
1. Install the angular cli, if it does not exists `npm install -g @angular/cli`
2. Checkout code: `git clone` 
3. `cd client/genomeUI`
4. `npm run doitall`  *or* `npm install && ng serve` to start up a  dev server. 
5. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Prod Build 
Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

# UI Design
1. This application is a clinet only app which serves mutable mock data using a local data store accessed via in the data service.

2. Available routes:
*  http://localhost:4200/list (default route), used to list *all* defined pathogens or a searchable/filtered list. This route supports navigating to a  *detail* view of a selected pathogen

* http://localhost:4200/add - supports adding a new pathogen with the following fields:
    * common name, 
    * scientific name, 
    * family (bacteria, virus, fungi, etc.), 
    * viral factor, 
    * clinical symptoms,
    * annotation,
    * genome sequence (provided in a text file)

3. Assumptions:
* Input validation not implenmented (Not required or suggested  per spec)
* User accessibility not implemented
* Data Model: The genome sequence is assumed to be unique for each pathogen
* Operational support for list, create, update (keying off the genome sequence). 
* The deletion of an operation is not supported, but would be simple to implement.
* Bulk operations (bulk upload/delete) are not supported.

# Questions:

1. Imagine each genomic sequence extending to millions of characters. What data storage & retrieval technologies and mechanisms would you recommend to ensure the scalability and performance of the system?
        
    **DataStorage**: A key:value non-relational data store is probably the best option for data storage and retrival as it faciitates horizontal scaling and sharding for improved performance.
        
    **Genome File Upload**: I would consider a multi-file upload protocol sililar to the AWS [S3 Rest API](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingRESTAPImpUpload.html), in a non-blocking async operation, to not lock up the main UI thread.
        
    **Retrieval**: An intelligent distributed caching strategy (primary LRU cache) would reduce the latency and improve performance.

2. Imagine a mobile version of this application. What challenges do you foresee and how would you enhance the user experience on a mobile device?
    
    **View optimizations**: 
    * Form factor probably dicates the best solution for mobile might be to limit the number of columns displayed in the list view.

    * Support segmenting the view data (e.g. user based or pathogen common-name based segmentation)  to request smaller chunks of data to support ahead of time opportunistic loading of data. For example, create a query to retrieve pathogen commonnames and then support a drill down for just the required pathogen record's details.
    
    * Leverage client side caching and background syncing as needed.

    **File Upload optimizations**: 
    
    * Support async upload of a the large genome sequence file from a cloud storage provider (box/S3/google drive).
    * Utilize push notification to the device on data load completion.
    
    **Search optimizations**: 
    
    * Support voice search.  
    * Use geolocation to narrow down the identity/originator of the requestor, and improve the specificity of queries. 
