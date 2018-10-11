import $ from 'jquery';
import tootipster from 'tooltipster';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';

window.onload = function() {

  // const mapImg = document.getElementById('map'),
  //       rect = mapImg.getBoundingClientRect(),
  //       { top, left } = rect;

  // console.log(top);

  // $('#my-tooltip').tooltipster({
  //   functionPosition: function(instance, helper, position) {
  //     console.log(position.coord.top);
  //     position.coord.top += 10;
  //     position.coord.left += 10;
  //     return position;
  //   }
  // });

  $('.tooltip').tooltipster({
    theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
    side: ['top'],
    animation: 'fade',
    contentAsHTML: true,
    content: $('#tooltip_content'),
    contentCloning: true,
    delay: 200
  });

};