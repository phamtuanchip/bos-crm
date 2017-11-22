import * as axios from 'axios';

const BASE_URL = 'http://man-uat.mn.com.vn';

function upload(formData) {       
   let sessionID = localStorage.getItem('SessionId');
   let logedOnUser = JSON.parse(localStorage.getItem('logedOnUser')); 
   console.log(logedOnUser);    
   let uploader = logedOnUser.UserDS.User.Username;
   let parentID = logedOnUser.UserDS.User.UserId;
   let contentType =  '$scope.selectedAttachmentFiles[index].type';
   let  rupload = {
              RequestClass: 'xBase',
              RequestAction: 'Upload',
              SessionId: sessionID,
              Username: uploader,
              Parent: parentID,
              WriteTempFile: true,
              'Content-Type': contentType
            }
    let rdownload =  {
              RequestClass: "xBase",
              RequestAction: "SearchBinary",
              SessionId: sessionID,
              Parent: parentID,
              ConditionFields: 'Parent',
              StaticFields: 'Name;Created;Modified;FileName;FileExtension;FileSize;CreatedBy;Description;Parent;FileSize',
              DynamicFields: 'CreatedByName;SignatureVerified'
            };
    const url = `${BASE_URL}/xRequest.ashx`;
    for ( var key in rupload ) {
            formData.append(key, rupload[key]);
        }
    
    
    return axios.post(url, formData)
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/Download/${img.AttachmentId}` })));
}

export { upload }