var shuffleSequence = seq("intro", "instructions", "set1", "construction1", "set2", "construction2", "final");
var defaults = [
    "Form", {hideProgressBar: true},
    "intro", {hideProgressBar: true},
    "Message", {hideProgressBar: true},
    "PictureAccept", {hideProgressBar: true}
    ];
var items = [
    ["intro", "intro", {html: {include: "intro.html" }}],
    ["instructions", "intro", {html: {include: "instructions.html" }}],
    ["set1", "intro", {html: {include: "set1.html" }}],
    //beginning of the first set of items
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction1", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    //end of the first set of items
    ["set2", "intro", {html: {include: "set2.html" }}],
    //beginning of the second set of items
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],   
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ["construction2", "PictureAccept", {s: "Sentence to be read by the participant", as: [["A", "url to picture"], ["S", "url to picture"]]}],
    ///end of the second set of items
    ["final", "intro", {html: {include: "final.html"}}]
];
