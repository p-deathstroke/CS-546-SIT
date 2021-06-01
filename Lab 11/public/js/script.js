(function ($) {
    let ulArea = $('#showList'),
        divArea = $('#show'),
        formArea = $('#searchForm'),
        inputArea = $('#search_term'),
        buttonArea = $('#submit-button'),
        linkArea = $('#homeLink')
    error = $('#errormessage')


    var requestConfig = {
        method: 'GET',
        url: ' http://api.tvmaze.com/shows'
    }
    $.ajax(requestConfig).then(function (responseMessage) {
        console.log(responseMessage)
        responseMessage.forEach(element => {
            ulArea.show().append(`<li><a class="test_class" href="${element._links.self.href}"> ${element.name} </li>`)
        });
        $('a.test_class').click((e) => {
            e.preventDefault();
            individualShows(e.target.href);
        });
    });
    formArea.submit(function (event) {
        event.preventDefault();
        ulArea.empty()
        ulArea.show()
        linkArea.show()

        const val = inputArea.val();
        if (!val || val.trim().length == 0) {
            error.show();
            return;
        }

        var requestConfig = {
            method: 'GET',
            url: 'http://api.tvmaze.com/search/shows?q=' + inputArea.val()
        };
        // $.ajax(requestConfig).then(function (responseMessage) {
        //     responseMessage.forEach(element => {
        //         ulArea.append(`<li><a href="${element.show._links.self.href}"> ${element.show.name} </li>`)
        //     })
        // });
        $.ajax(requestConfig).then(function (responseMessage) {
            console.log(responseMessage)
            divArea.hide()
            responseMessage.forEach(element => {
                ulArea.append(`<li><a class="test_class" href="${element.show._links.self.href}"> ${element.show.name} </li>`)
            });
            $('a.test_class').click((e) => {
                e.preventDefault();
                individualShows(e.target.href);
            });
        });
    })
    function individualShows(test) {
        // linkArea.on('click', function (event) {
        // event.preventDefault();
        ulArea.hide()
        divArea.empty()
        divArea.show()
        var requestConfig = {
            method: 'GET',
            url: test
        };
        $.ajax(requestConfig).then(function (responseMessage) {
            console.log(responseMessage)
            inputArea.hide()
            buttonArea.hide()

            if (!responseMessage.name) {
                responseMessage.name = "N/A";
            }
            if (!responseMessage.language) {
                responseMessage.language = "N/A"
            }
            if (!responseMessage.rating) {
                responseMessage.rating = {}
                responseMessage.rating["average"] = "N/A"
            } else {
                if (!responseMessage.rating.average) responseMessage.rating.average = "N/A"
            }


            if (!responseMessage.network) {
                responseMessage.network = {}
                responseMessage.network["name"] = "N/A"
            } else {
                if (!responseMessage.network.name) responseMessage.network.name = "N/A"
            }


            if (!responseMessage.summary) {
                responseMessage.summary = "N/A"
            }
            if (!responseMessage.image) {
                responseMessage.image = {}
                responseMessage.image["medium"] = '/public/images/no_image.jpeg'
            } else {
                if (!responseMessage.image.medium) responseMessage.image.medium = '/public/images/no_image.jpeg'
            }
            if (!responseMessage.genre) {
                responseMessage.genre = "N/A";
            }

            divArea.append(`<h1> Name: ${responseMessage.name} </h1>
                              <img alt="showImage" src="${responseMessage.image.medium}">
                            <dl>  
                            <dt>Langauge:</dt>
                            <dd> ${responseMessage.language} </dd> </dl>
                            `)
            // divArea.append(` 
            //                       <dd>${responseMessage.genres} </dd>`)
            data = '<dl><dt>Genre: </dt> <dd><ul>'
            for (genre of responseMessage.genres) {
                if (genre == 'N/A') {
                    data = data + '<li>N/A</li>'
                }
                else {
                    data = data + `<li>${genre}</li>`
                }

            }
            data = data + '</ul></dd></dl>'
            divArea.append(data)
            divArea.append(`    <dl><dt>Rating: </dt>
                              <dd>${responseMessage.rating.average} </dd>
                              <dt> Network:</dt>
                              <dd> ${responseMessage.network.name} </dd>
                              <dt>Summary:</dt>
                              <dd> ${responseMessage.summary.replace(/<[^>]*>/g, " ").replace(/\s{2,}/g, " ").trim()} </dd>  <! --regex pattern from stackoverflow -->
                              </dl>
                              `)
            linkArea.show()
        })
        // })
    }
})(jQuery);