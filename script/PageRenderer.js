PageRenderer = {

    render(page) {

        let html = '';
        
        html += this.renderTitle(page.title);
        typeof(page.heroImage) != 'undefined' && (html += this.renderHeroImage(page.heroImage));
        html += this.renderContent(page.content);

        return html

    },

    renderTitle(title) {

        return `<h1>${title}</h1>`;

    },

    renderHeroImage(imgSrc) {

        return `<div class="hero-img-container"><img src="${imgSrc}" /></div>`;

    },

    renderContent(content) {

        let html = '';

        content.forEach(item => {

            switch(item.type) {

                case 'accordion':

                    html +=
                    `<section class="accordion">
                        <input type="radio" name="accordion" id="${item.value.toLowerCase()}">
                        <h2 class="handle">
                            <label for="${item.value.toLowerCase()}">${item.value}</label>
                        </h2>
                        <div class="content">
                            ${this.renderContent(item.children)}
                        </div>
                    </section>`;

                    break;

                case 'paragraph':

                    html += `<p>${item.value}</p>`

                    break;

                case 'video':

                    html += `<iframe width="560" height="315" src="${item.value}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

                    break;

                case 'ul':

                    html += `<ul>`;

                    item.content.forEach(c => html += `<li>${c}</li>`);

                    html += `</ul>`;

                    break;

                case 'ol':

                    html += `<ol>`;

                    item.content.forEach(c => html += `<li>${c}</li>`);

                    html += `</ol>`;

                    break;

                case 'img':

                    html += `<div class="img-container" style="width:image width px; font-size:80%; text-align:center;"><img src="${item.src}" width="width" height="height" style="padding-bottom:0.5em;" />${item.caption}</div>`;

                    break;

                case 'html':

                    html += item.value;

                    break;                    
    
                default:

                    html += '';

                    break;
    
            }

        });

        return html;

    }

};