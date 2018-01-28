const timeInMinutes = require("./timeInMinutes");

describe("timeInMinutes", () => {
  it("correctly totals the time in minutes as available", () => {
    const html = `
<!DOCTYPE html>
<html lang="en" class="controller_podcasts">
    <head>
        <title>Overcast</title>
    </head>
    <body>
        <div class="container pure-g">
            <div class="content pure-u-1">
                <div class="pure-g">
    <div class="pure-u-1-5"></div>
    <div class="pure-u-1 pure-u-sm-3-5">


            <h2 class="ocseparatorbar">All Active Episodes</h2>
            <a class="episodecell" href="/+bDb7pfuoKbg">
        <img class="art" src="https://d2uzvmey2c90kn.cloudfront.net/img/default-artwork.png">
        <div class="cellcontent">
            <div class="titlestack">
                <div class="caption2 singleline">Uploads</div>
                <div class="title singleline">&nbsp;</div>
                <div class="caption2 singleline">
                    Oct 15, 2017                </div>
            </div>
        </div>
    </a>
    <a class="episodecell" href="/+GpUPRsrrQ">
        <img class="art" src="https://d1eedt7bo0oujw.cloudfront.net/art?s=116b5f89b43e85991645a861c3737778251245183e369bb998a8afff26e3cfac&w=160&u=https%3A%2F%2Fmedia2.wnyc.org%2Fi%2F1400%2F1400%2Fl%2F80%2F1%2FMorePerfect_WNYCStudios_1400.png">
        <div class="cellcontent">
            <div class="titlestack">
                <div class="caption2 singleline">Radiolab Presents: More Perfect</div>
                <div class="title singleline">Sex Appeal</div>
                <div class="caption2 singleline">
                    Nov 23, 2017 &bull; 55 min                </div>
            </div>
        </div>
    </a>
    <a class="episodecell" href="/+GpUMAQ0Uk">
        <img class="art" src="https://d1eedt7bo0oujw.cloudfront.net/art?s=116b5f89b43e85991645a861c3737778251245183e369bb998a8afff26e3cfac&w=160&u=https%3A%2F%2Fmedia2.wnyc.org%2Fi%2F1400%2F1400%2Fl%2F80%2F1%2FMorePerfect_WNYCStudios_1400.png">
        <div class="cellcontent">
            <div class="titlestack">
                <div class="caption2 singleline">Radiolab Presents: More Perfect</div>
                <div class="title singleline">Mr. Graham and the Reasonable Man</div>
                <div class="caption2 singleline">
                    Nov 30, 2017 &bull; 68 min                </div>
            </div>
        </div>
    </a>
    <a class="episodecell" href="/+B1qxJwnTU">
        <img class="art" src="https://d1eedt7bo0oujw.cloudfront.net/art?s=c778117347656e33c287c7e62bac1971c66ff650022191ce203c3f04c3ac6b66&w=160&u=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F52d66949e4b0a8cec3bcdd46%2Ft%2F52ebf67fe4b0f4af2a4502d8%2F1391195777839%2F1500w%2FHello%2BInternet.003.png">
        <div class="cellcontent">
            <div class="titlestack">
                <div class="caption2 singleline">Hello Internet</div>
                <div class="title singleline">#93: Mr. Chompers</div>
                <div class="caption2 singleline">
                    Nov 30, 2017 &bull; played                </div>
            </div>
        </div>
    </a>
    <a class="episodecell" href="/+GpUOWZ9eA">
        <img class="art" src="https://d1eedt7bo0oujw.cloudfront.net/art?s=116b5f89b43e85991645a861c3737778251245183e369bb998a8afff26e3cfac&w=160&u=https%3A%2F%2Fmedia2.wnyc.org%2Fi%2F1400%2F1400%2Fl%2F80%2F1%2FMorePerfect_WNYCStudios_1400.png">
        <div class="cellcontent">
            <div class="titlestack">
                <div class="caption2 singleline">Radiolab Presents: More Perfect</div>
                <div class="title singleline">The Architect</div>
                <div class="caption2 singleline">
                    Dec 7, 2017 &bull; 34 min                </div>
            </div>
        </div>
    </a>
    <a class="episodecell" href="/+B1qxpAtRY">
        <img class="art" src="https://d1eedt7bo0oujw.cloudfront.net/art?s=c778117347656e33c287c7e62bac1971c66ff650022191ce203c3f04c3ac6b66&w=160&u=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F52d66949e4b0a8cec3bcdd46%2Ft%2F52ebf67fe4b0f4af2a4502d8%2F1391195777839%2F1500w%2FHello%2BInternet.003.png">
        <div class="cellcontent">
            <div class="titlestack">
                <div class="caption2 singleline">Hello Internet</div>
                <div class="title singleline">95: Break Glass in Case of Emergency</div>
                <div class="caption2 singleline">
                    Dec 31, 2017                </div>
            </div>
        </div>
    </a>

    </div>
    <div class="pure-u-1-5"></div>
</div>
            </div>
        </div>

        <div class="footer l-box is-center">
                        &copy;&nbsp;2014&ndash;2018&nbsp;Overcast&nbsp;Radio,&nbsp;LLC
            &bull; <a href="/privacy">Privacy Policy</a>
            &bull; <a href="/contact">Contact</a>
                    </div>
    </body>
</html>
`;
    expect(timeInMinutes(html)).toBe(157);
  });
});
