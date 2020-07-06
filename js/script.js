$(document).ready(function() {

  'use strict';

  // ========================
  // For Fade-in effect
  // ========================

  $('html').removeClass('fade-out');

  // =================
  // Responsive videos
  // =================

  $('.post-content').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  // ===============
  // Off Canvas menu
  // ===============

  $('.off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.off-canvas-container').toggleClass('is-active');
  });

});