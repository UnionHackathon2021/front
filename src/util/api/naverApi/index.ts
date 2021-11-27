import axios from "axios";

export const stt = () => {
  const clientId = "hgk845utox";
  const clientSecret = "Auend329Xbf9V339eKZkDfMoDQjjqLDSlGqPMhTj";
  const url = `https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=Kor`;
  const requestData = {
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "X-NCP-APIGW-API-KEY-ID": clientId,
      "X-NCP-APIGW-API-KEY": clientSecret,
    },
    body: fs.createReadStream(filePath),
  };
};
