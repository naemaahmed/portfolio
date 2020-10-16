(function($) {
    // Remove no-js class
    $('html').removeClass('no-js');

    // const clips = JSON.parse(``)
    clips = [
      {
        "headline": "Always Trumpers: The president’s unbreakable wall",
        "link": "https://www.axios.com/always-trumpers-republicans-axios-on-hbo-f4a866a6-03a8-4632-b92b-47f79607ef01.html?utm_source=twitter&utm_medium=social&utm_campaign=organic",
        "slug": "preview-10-13-2020.png",
        "date": "10/13/2020",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "There aren't enough jobs for America's unemployed",
        "link": "https://www.axios.com/unemployment-open-jobs-every-state-48fd702c-146b-4d62-8088-16aa7c3463dc.html?utm_source=twitter&utm_medium=social&utm_campaign=organic&utm_content=1100",
        "slug": "preview-9-8-2020.png",
        "date": "9/8/2020",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "The U.S. is far behind other rich countries in coronavirus response",
        "link": "https://www.axios.com/rich-countries-coronavirus-data-united-states-cc412dd5-ef7d-4dc9-a891-e300712860e7.html",
        "slug": "preview-8-16-2020.png",
        "date": "8/16/2020",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "When and how to vote in all 50 states",
        "link": "https://www.axios.com/how-to-vote-by-state-2020-307c3d17-ee57-4a1b-8bad-182ca1cdb752.html",
        "slug": "preview-8-13-2020.png",
        "date": "8/13/2020",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "Coronavirus brings down biking — but not as much as driving",
        "link": "https://www.axios.com/coronavirus-biking-driving-commute-aa3b4059-958f-4f82-b84f-b0f6d486468c.html",
        "slug": "preview-7-24-2020.png",
        "date": "7/24/2020",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "Millions more homes face flood risk than previously thought",
        "link": "https://www.axios.com/flood-risk-properties-climate-change-6b5295fe-4f9d-4bc8-8008-a2ef9561f1d1.html",
        "slug": "preview-6-29-2020.png",
        "date": "6/29/2020",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "Choose your own climate and energy adventure",
        "link": "https://www.axios.com/choose-your-own-climate-and-energy-adventure-9020127b-727c-451d-bbc9-f340655f599f.html",
        "slug": "preview-12-3-2019.png",
        "date": "12/3/2019",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "North Korea's tactical guided message to Trump",
        "link": "https://www.axios.com/north-koreas-tactical-guided-message-trump-e55dc6f9-6a30-4c2c-842e-dc4370c14260.html",
        "slug": "preview-8-18-2019.png",
        "date": "8/18/2019",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "America's majority minority future",
        "link": "https://www.axios.com/when-american-minorities-become-the-majority-d8b3ee00-e4f3-4993-8481-93a290fdb057.html",
        "slug": "preview-4-29-2019.png",
        "date": "4/29/2019",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "The great family exodus",
        "link": "https://www.axios.com/families-children-cities-san-francisco-housing-prices-7c1064b9-c497-4cdf-928e-48a4f410f7ba.html",
        "slug": "preview-10-30-2019.png",
        "date": "10/30/2018",
        "type": "visual",
        "use": "y"
      },
      {
        "headline": "Tale of four countries: The world’s evolving energy mixes",
        "link": "https://www.axios.com/four-countries-energy-mix-818e8eca-a649-4dd3-ac57-e4886678bc8a.html",
        "slug": "preview-10-14-2018.png",
        "date": "10/14/2018",
        "type": "visual",
        "use": "y"
      }
    ]

    let content = $('.clips-wrapper')
    
    clips.forEach(element => {
        content.append(`<div class = "clip">
                          <div class = "preview">
                            <img id= "theImg" src="./images/${element.slug}"/>
                          </div>
                          <div class = "info">
                            <div class = "date">${element.date}</div>
                            <div class = "headline"><a href = "${element.link}" target = "_blank">${element.headline}</div>
                          </div>
                        </div>`)
    });
   

})(jQuery);
