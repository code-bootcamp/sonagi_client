import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!, $FILE_TYPE: FILE_TYPE!) {
    uploadFile(files: $files, FILE_TYPE: $FILE_TYPE) {
      url
    }
  }
`;
