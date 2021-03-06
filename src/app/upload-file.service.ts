import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
 
@Injectable()
export class UploadFileService {
 
  FOLDER = 'jsa-s3/';
 
  constructor() { }
 
  uploadfile(file) {
 
    const bucket = new S3(
      {
        accessKeyId: 'AKIAIKSKLVQ4BMWCZPEA',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );
 
    const params = {
      Bucket: 'praxis-presentation-videos',
      Key: this.FOLDER + file.name,
      Body: file
    };
 
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
 
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
 
}