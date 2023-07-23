import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import { useState } from "react";


const Title =  () => (
    <img
        className="logo"
        alt="logo"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"
     />
     
);

//Composing Component

const Header = () => {
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Card</li>
                </ul>
            </div>
            
        </div>
    );
};

// config Driven UI


/*const StateTutorial = () => {
    let [inputValue, setInputValue] = useState("Amey");

    let increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    }

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    
    return (
        <div className="center">
            <input placeholder="Enter the Somthing..." onChange = {onChange} className = "center" />
            <h1 id = "root">{inputValue}</h1>
        </div>
    )
}*/
const restaurentlist = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "205007",
          "name": "Yolkshire",
          "uuid": "5b13903c-75ea-47ef-936c-aff33e3dafa9",
          "city": "6",
          "area": "F.C. Road",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "usaii3ciei7qqltmxubf",
          "cuisines": [
            "Healthy Food",
            "European",
            "Salads",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 2,
          "slugs": {
            "restaurant": "yolkshire-shivaji-nagar-shivaji-nagar",
            "city": "pune"
          },
          "cityState": "6",
          "address": "Millenium Plaza, Fergusson College Road, Fergusson College Campus, Deccan Gymkhana, Pune, Maharashtra, India",
          "locality": "F.C. Road",
          "parentId": 1202,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7394405~p=1~eid=00000189-57a5-165c-0a9a-83e500e9013c~srvts=1689392584284",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40",
            "discountTag": "",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "205007",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 2,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.2",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "64313",
          "name": "Bedekar Misal",
          "uuid": "76e91fa0-4762-4781-b7b0-6eba02470db8",
          "city": "6",
          "area": "Shaniwar Peth",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "s7iaru1tltotpdqnk8fa",
          "cuisines": [
            "Maharashtrian"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 1.2000000476837158,
          "slugs": {
            "restaurant": "bedekar-misal-budhwar-peth-swargate",
            "city": "pune"
          },
          "cityState": "6",
          "address": "Munjabacha Bol, Near Patrya Maruti Temple, Narayan Peth, Pune",
          "locality": "Budhwar Peth",
          "parentId": 42915,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "64313",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 1.2000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.5",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "18808",
          "name": "Faasos - Wraps & Rolls",
          "uuid": "e4e6312a-96fd-4e7c-b924-e109cf7df89a",
          "city": "6",
          "area": "Shaniwar Peth",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
          "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 0.4000000059604645,
          "slugs": {
            "restaurant": "fassos-subhamangal-housing-society-shivaji-nagar",
            "city": "pune"
          },
          "cityState": "6",
          "address": "S.no 457 shaniwar peth ,Pune 411030",
          "locality": "Shaniwar Peth FC",
          "parentId": 21809,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.4 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "18808",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 0.4000000059604645,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "5107",
          "name": "Blue Nile",
          "uuid": "993c071c-422e-44b3-ba73-0ab949457996",
          "city": "6",
          "area": "Camp Area",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "usj6ahnbc4lvrmxlzuee",
          "cuisines": [
            "Indian",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 70000,
          "costForTwoString": "₹700 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "blue-nile-camp",
            "city": "pune"
          },
          "cityState": "6",
          "address": "4, Bund Garden Road, Opposite Poona Club, Camp Area, Pune",
          "locality": "Bund Garden Road",
          "parentId": 145,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7384320~p=4~eid=00000189-57a5-165c-0a9a-83e600e9042b~srvts=1689392584284",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹175 OFF",
            "subHeader": "ABOVE ₹499",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "5107",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "491702",
          "name": "Naadbramha Idli",
          "uuid": "cb7035f8-ee39-4707-8e8a-1ac65c32af1d",
          "city": "6",
          "area": "Swargate",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "ydrbvdsobyfzyapbkdmj",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "slaString": "19 MINS",
          "lastMileTravel": 0.30000001192092896,
          "slugs": {
            "restaurant": "naadbramha-idli-swargate-swargate",
            "city": "pune"
          },
          "cityState": "6",
          "address": "Shop No.3 ,Ground floor H.No.184 A/MP 2, Shivaji road,Kasba peth,pune-411011",
          "locality": "Rasta Peth",
          "parentId": 251339,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "491702",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "lastMileTravel": 0.30000001192092896,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.7",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "70614",
          "name": "Wadeshwar (Bajirao road)",
          "uuid": "bf7a0b7b-9a10-4d13-ac15-bdcb79fd8f35",
          "city": "6",
          "area": "Sadashiv Peth",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "pgpzbjwj4chlpcvafm2l",
          "cuisines": [
            "South Indian",
            "Snacks",
            "Street Food",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 1.2999999523162842,
          "slugs": {
            "restaurant": "shree-wadeshwar-bhuvan-shukrawar-peth-swargate",
            "city": "pune"
          },
          "cityState": "6",
          "address": "Near Telephone Exchange, Bajirao Road, Natubaug Chouk, Shukrawar Peth, Pune",
          "locality": "Bajirao Road",
          "parentId": 1770,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "70614",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 1.2999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.6",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "263632",
                  "name": "Shravan Specials by Lunchbox",
                  "uuid": "eb777868-3b7e-4baf-a6f4-0ef343e1a82f",
                  "city": "6",
                  "area": "Shaniwar Peth",
                  "totalRatingsString": "50+ ratings",
                  "cloudinaryImageId": "awdiaapk6kyqau0tj5vo",
                  "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "slaString": "24 MINS",
                  "lastMileTravel": 0.4000000059604645,
                  "slugs": {
                    "restaurant": "navratri-meals-by-faasos-shaniwar-peth-swargate",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "S.no 457 shaniwar peth ,Pune 411030",
                  "locality": "Shaniwar Peth FC",
                  "parentId": 21938,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.4 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "263632",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 0.4000000059604645,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 50,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "147865",
                  "name": "Aamhi Pohekar",
                  "uuid": "6823a98d-af0b-4a5d-af39-73b2abbe1dce",
                  "city": "6",
                  "area": "Shaniwar Peth",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "ws0he1js9rxpfz4i55dh",
                  "cuisines": [
                    "North Indian",
                    "Maharashtrian",
                    "Snacks"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 10000,
                  "costForTwoString": "₹100 FOR TWO",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "slaString": "19 MINS",
                  "lastMileTravel": 1.2000000476837158,
                  "slugs": {
                    "restaurant": "aamhi-pohekar-narayan-peth-swargate",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "Shop no.2,Near Patrya Maruti Mandir,Narayan Peth,Pune, Pune PMC,411030",
                  "locality": "Narayan Peth",
                  "parentId": 25785,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "147865",
                    "deliveryTime": 19,
                    "minDeliveryTime": 19,
                    "maxDeliveryTime": 19,
                    "lastMileTravel": 1.2000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.7",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "97272",
                  "name": "Ramsar Bakery",
                  "uuid": "cfe42fd8-bd52-45b2-8109-a713b7be6bcb",
                  "city": "6",
                  "area": "Shivaji Nagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "rmf8gsxyxtgejfj73dxe",
                  "cuisines": [
                    "Bakery",
                    "Snacks",
                    "Desserts",
                    "Fast Food",
                    "Beverages",
                    "Indian",
                    "Street Food"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 17,
                  "minDeliveryTime": 17,
                  "maxDeliveryTime": 17,
                  "slaString": "17 MINS",
                  "lastMileTravel": 0.699999988079071,
                  "slugs": {
                    "restaurant": "ramsar-bakery-shivaji-nagar-shivaji-nagar",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "Opposite PMC Building, Shivaji Nagar, Pune",
                  "locality": "Congress House Road",
                  "parentId": 166716,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "97272",
                    "deliveryTime": 17,
                    "minDeliveryTime": 17,
                    "maxDeliveryTime": 17,
                    "lastMileTravel": 0.699999988079071,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.1",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "4314",
                  "name": "Sandwich Express",
                  "uuid": "ace3d2da-73cb-4ecb-88eb-d28b800b807e",
                  "city": "6",
                  "area": "Koregaon Park",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "aehf6qrfk9wxcwwciqik",
                  "cuisines": [
                    "Street Food",
                    "Snacks",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 44,
                  "minDeliveryTime": 44,
                  "maxDeliveryTime": 44,
                  "slaString": "44 MINS",
                  "lastMileTravel": 6.300000190734863,
                  "slugs": {
                    "restaurant": "sandwich-express-koregaon-park",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "Shop 9, Vrindavan Apartments, Opposite Cosmos Bank, Lane 6, Koregaon Park, Pune",
                  "locality": "Koregaon Park",
                  "parentId": 801,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5700,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5700,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5700",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7310886~p=13~eid=00000189-57a5-165c-0a9a-83e900e90d4e~srvts=1689392584284",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6.3 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹75 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "4314",
                    "deliveryTime": 44,
                    "minDeliveryTime": 44,
                    "maxDeliveryTime": 44,
                    "lastMileTravel": 6.300000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.4",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "375901",
                  "name": "Shripad Idli center",
                  "uuid": "45dc69fa-4723-46c1-a7db-b5ea09f5083b",
                  "city": "6",
                  "area": "Swargate",
                  "totalRatingsString": "20+ ratings",
                  "cloudinaryImageId": "z0swwqykaia4kpgqdmvw",
                  "cuisines": [
                    "South Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 10000,
                  "costForTwoString": "₹100 FOR TWO",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "slaString": "27 MINS",
                  "lastMileTravel": 0.30000001192092896,
                  "slugs": {
                    "restaurant": "shripad-idli-center-swargate-swargate",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "174 , Kasba Peth near navaghra Shani mandir  opposite Shaniwar Wada",
                  "locality": "Kasba Peth",
                  "parentId": 187231,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "375901",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 0.30000001192092896,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.4",
                  "totalRatings": 20,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "705492",
                  "name": "Maharaja Wada",
                  "uuid": "e9a8361c-7f64-4bfa-9203-40368612666d",
                  "city": "6",
                  "area": "Swargate",
                  "totalRatingsString": "Too Few Ratings",
                  "cloudinaryImageId": "75648802d8e57433d98e63025a4cca4d",
                  "cuisines": [
                    "Snacks",
                    "Pizzas",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 15000,
                  "costForTwoString": "₹150 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 0.30000001192092896,
                  "slugs": {
                    "restaurant": "maharaja-wada-swargate-swargate",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "C.T.S. NO 182 SHOP NO 2 KASBA PETH, PUNE KASBA VISHRAMBAGH PUNE MAHARASHTRA 411011",
                  "locality": "Kasba Peth",
                  "parentId": 129941,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "705492",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 0.30000001192092896,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "--",
                  "totalRatings": 0,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "409927",
                  "name": "Hindavi Swarajya Special Tupatil Sabudane Wade",
                  "uuid": "a53c0c77-c2d3-43ca-ab82-73b18c55740c",
                  "city": "6",
                  "area": "Shivajinagar",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "uqmhdd4bvsjwtytuhmwa",
                  "cuisines": [
                    "Snacks",
                    "Maharashtrian",
                    "Fast Food"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 10000,
                  "costForTwoString": "₹100 FOR TWO",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "slaString": "19 MINS",
                  "lastMileTravel": 1.100000023841858,
                  "slugs": {
                    "restaurant": "hindavi-swarajya-–-special-tupatil-sabudane-wade-shivaji-nagar-shivaji-nagar",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "Junglee Maharaj Road, Opposite Jungli Maharaj Mandir, JM Road, Pune",
                  "locality": "JM Road",
                  "parentId": 246850,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "409927",
                    "deliveryTime": 19,
                    "minDeliveryTime": 19,
                    "maxDeliveryTime": 19,
                    "lastMileTravel": 1.100000023841858,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.5",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "263632",
                  "name": "Shravan Specials by Lunchbox",
                  "uuid": "eb777868-3b7e-4baf-a6f4-0ef343e1a82f",
                  "city": "6",
                  "area": "Shaniwar Peth",
                  "totalRatingsString": "50+ ratings",
                  "cloudinaryImageId": "awdiaapk6kyqau0tj5vo",
                  "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "slaString": "24 MINS",
                  "lastMileTravel": 0.4000000059604645,
                  "slugs": {
                    "restaurant": "navratri-meals-by-faasos-shaniwar-peth-swargate",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "S.no 457 shaniwar peth ,Pune 411030",
                  "locality": "Shaniwar Peth FC",
                  "parentId": 21938,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.4 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "263632",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 0.4000000059604645,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 50,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "147865",
                  "name": "Aamhi Pohekar",
                  "uuid": "6823a98d-af0b-4a5d-af39-73b2abbe1dce",
                  "city": "6",
                  "area": "Shaniwar Peth",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "ws0he1js9rxpfz4i55dh",
                  "cuisines": [
                    "North Indian",
                    "Maharashtrian",
                    "Snacks"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 10000,
                  "costForTwoString": "₹100 FOR TWO",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "slaString": "19 MINS",
                  "lastMileTravel": 1.2000000476837158,
                  "slugs": {
                    "restaurant": "aamhi-pohekar-narayan-peth-swargate",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "Shop no.2,Near Patrya Maruti Mandir,Narayan Peth,Pune, Pune PMC,411030",
                  "locality": "Narayan Peth",
                  "parentId": 25785,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "147865",
                    "deliveryTime": 19,
                    "minDeliveryTime": 19,
                    "maxDeliveryTime": 19,
                    "lastMileTravel": 1.2000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.7",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "97272",
                  "name": "Ramsar Bakery",
                  "uuid": "cfe42fd8-bd52-45b2-8109-a713b7be6bcb",
                  "city": "6",
                  "area": "Shivaji Nagar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "rmf8gsxyxtgejfj73dxe",
                  "cuisines": [
                    "Bakery",
                    "Snacks",
                    "Desserts",
                    "Fast Food",
                    "Beverages",
                    "Indian",
                    "Street Food"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 17,
                  "minDeliveryTime": 17,
                  "maxDeliveryTime": 17,
                  "slaString": "17 MINS",
                  "lastMileTravel": 0.699999988079071,
                  "slugs": {
                    "restaurant": "ramsar-bakery-shivaji-nagar-shivaji-nagar",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "Opposite PMC Building, Shivaji Nagar, Pune",
                  "locality": "Congress House Road",
                  "parentId": 166716,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "97272",
                    "deliveryTime": 17,
                    "minDeliveryTime": 17,
                    "maxDeliveryTime": 17,
                    "lastMileTravel": 0.699999988079071,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.1",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "4314",
                  "name": "Sandwich Express",
                  "uuid": "ace3d2da-73cb-4ecb-88eb-d28b800b807e",
                  "city": "6",
                  "area": "Koregaon Park",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "aehf6qrfk9wxcwwciqik",
                  "cuisines": [
                    "Street Food",
                    "Snacks",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 44,
                  "minDeliveryTime": 44,
                  "maxDeliveryTime": 44,
                  "slaString": "44 MINS",
                  "lastMileTravel": 6.300000190734863,
                  "slugs": {
                    "restaurant": "sandwich-express-koregaon-park",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "Shop 9, Vrindavan Apartments, Opposite Cosmos Bank, Lane 6, Koregaon Park, Pune",
                  "locality": "Koregaon Park",
                  "parentId": 801,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5700,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5700,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5700",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7310886~p=13~eid=00000189-57a5-165c-0a9a-83e900e90d4e~srvts=1689392584284",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6.3 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹75 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "4314",
                    "deliveryTime": 44,
                    "minDeliveryTime": 44,
                    "maxDeliveryTime": 44,
                    "lastMileTravel": 6.300000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.4",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "375901",
                  "name": "Shripad Idli center",
                  "uuid": "45dc69fa-4723-46c1-a7db-b5ea09f5083b",
                  "city": "6",
                  "area": "Swargate",
                  "totalRatingsString": "20+ ratings",
                  "cloudinaryImageId": "z0swwqykaia4kpgqdmvw",
                  "cuisines": [
                    "South Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 10000,
                  "costForTwoString": "₹100 FOR TWO",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "slaString": "27 MINS",
                  "lastMileTravel": 0.30000001192092896,
                  "slugs": {
                    "restaurant": "shripad-idli-center-swargate-swargate",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "174 , Kasba Peth near navaghra Shani mandir  opposite Shaniwar Wada",
                  "locality": "Kasba Peth",
                  "parentId": 187231,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "375901",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 0.30000001192092896,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.4",
                  "totalRatings": 20,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "705492",
                  "name": "Maharaja Wada",
                  "uuid": "e9a8361c-7f64-4bfa-9203-40368612666d",
                  "city": "6",
                  "area": "Swargate",
                  "totalRatingsString": "Too Few Ratings",
                  "cloudinaryImageId": "75648802d8e57433d98e63025a4cca4d",
                  "cuisines": [
                    "Snacks",
                    "Pizzas",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 15000,
                  "costForTwoString": "₹150 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 0.30000001192092896,
                  "slugs": {
                    "restaurant": "maharaja-wada-swargate-swargate",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "C.T.S. NO 182 SHOP NO 2 KASBA PETH, PUNE KASBA VISHRAMBAGH PUNE MAHARASHTRA 411011",
                  "locality": "Kasba Peth",
                  "parentId": 129941,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "705492",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 0.30000001192092896,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "--",
                  "totalRatings": 0,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "409927",
                  "name": "Hindavi Swarajya Special Tupatil Sabudane Wade",
                  "uuid": "a53c0c77-c2d3-43ca-ab82-73b18c55740c",
                  "city": "6",
                  "area": "Shivajinagar",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "uqmhdd4bvsjwtytuhmwa",
                  "cuisines": [
                    "Snacks",
                    "Maharashtrian",
                    "Fast Food"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 10000,
                  "costForTwoString": "₹100 FOR TWO",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "slaString": "19 MINS",
                  "lastMileTravel": 1.100000023841858,
                  "slugs": {
                    "restaurant": "hindavi-swarajya-–-special-tupatil-sabudane-wade-shivaji-nagar-shivaji-nagar",
                    "city": "pune"
                  },
                  "cityState": "6",
                  "address": "Junglee Maharaj Road, Opposite Jungli Maharaj Mandir, JM Road, Pune",
                  "locality": "JM Road",
                  "parentId": 246850,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3300,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3300",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "409927",
                    "deliveryTime": 19,
                    "minDeliveryTime": 19,
                    "maxDeliveryTime": 19,
                    "lastMileTravel": 1.100000023841858,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.5",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              }
    
];
const RestaurentCard =({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    return (
        <div className="card">
            
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" 
            + cloudinaryImageId} />
            <h2>{name}</h2>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{lastMileTravelString} Minutes</h2>

        </div>
    )
}


const Body = () => {
    return (
        <div className="retaurent-list">
            {
                restaurentlist.map(restaurant => {
                    return <RestaurentCard {...restaurant.data}/>
                })
            }
        </div>
    )
};

const Footer = () => {
    return <h4>Footer</h4>
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
