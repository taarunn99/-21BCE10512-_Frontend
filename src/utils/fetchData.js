import axios from "axios";

const API_URL = "https://vit-tm-task.api.trademarkia.app/api/v3/us";

export const fetchData = async(inputQuery, page = 1, rows = 10) => {
    const data = JSON.stringify({
      input_query: inputQuery,
      input_query_type: "",
      sort_by: "default",
      status: [],
      exact_match: false,
      date_query: false,
      owners: [],
      attorneys: [],
      law_firms: [],
      mark_description_description: [],
      classes: [],
      page: page,
      rows: rows,
      sort_order: "desc",
      states: [],
      counties: [],
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: apiUrl,
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json",
        origin: "http://localhost:3001",
        priority: "u=1, i",
        referer: "http://localhost:3001/",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      data: data,
    };
    try{
        const response = await axios.request(config);
        return response.data;
    }
    catch(error){
        console.error("API call: ", error);
        throw error;
    }
}