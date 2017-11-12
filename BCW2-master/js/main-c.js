'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const showImages = () => {
    const ul = document.querySelector('#thisList');

    fetch('images.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
           // let html = '';
            json.forEach((image) => {
                //put code here
                let li = document.createElement("li");
                let fig = document.createElement("figure");
                let a = document.createElement("a");
                let figcaption = document.createElement("figcaption");
                let h3 = document.createElement("h3");
                let img = document.createElement("img");
                let ul = document.getElementById("thisList");
                let headline = document.createTextNode(image.mediaTitle);

                h3.appendChild(headline);
                figcaption.appendChild(h3);

                img.setAttribute('src', `img/thumbs/${image.mediaThumb}`);
                a.setAttribute('href', `img/original/${image.mediaUrl}`);

                a.appendChild(img);
                fig.appendChild(a);
                fig.appendChild(figcaption);
                li.appendChild(fig);
                ul.appendChild(li);
            });
        });
};

showImages();