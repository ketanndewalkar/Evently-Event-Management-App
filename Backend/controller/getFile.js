const axios = require("axios");


const getFile = async (fileId) => {
  const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile?file_id=${fileId}`;

  try {
    const response = await axios.get(url,{timeout:10000});
    const filePath = response.data.result.file_path;
    const fileUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${filePath}`;

    return fileUrl;
  } catch (error) {
    console.log(error);
  }
};

module.exports={getFile}