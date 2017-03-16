(function() {
  'use strict';


  let expect = chai.expect;

  describe('main module', function(){

    describe('showRecent function', function(){

      beforeEach(function(){
        let recentTag = document.createElement('main');
        recentTag.classList.add('recent');
        document.querySelector('body').appendChild(recentTag);
      });

      afterEach(function(){
        let recentTag = document.querySelector('main');
        recentTag.parentNode.removeChild(recentTag);
      });

      it('should be a function', function(){
        expect(window.thoughter.showRecent).to.be.a('function');
      });

      it('should add elements for each piece of data', function(){
        window.thoughter.showRecent([
          {content: 'Hello',
          createTime: '3/21',
          id: 'foobar'}
        ]);
        let recent = document.querySelectorAll('article');
        expect(recent.length).to.equal(1);
      });

      it('should add multiple elements with more than one data point', function(){
        window.thoughter.showRecent([
          {content: 'Hey',
          createTime: '3/21',
          id: 'foobar'},
          {content: 'Hey',
          createTime: '3/21',
          id: 'foobar'},
          {content: 'Hey',
          createTime: '3/21',
          id: 'foobar'}
        ]);
        let recent = document.querySelectorAll('article');
        expect(recent.length).to.equal(3);
      });

      it('should handle a non-array argument', function(){
        window.thoughter.showRecent('foobar');
        let recent = document.querySelectorAll('article');
        expect(recent.length).to.equal(0);
      });

      it('should handle an empty array', function(){
        window.thoughter.showRecent([]);
        let recent = document.querySelectorAll('article');
        expect(recent.length).to.equal(0);
      });

    });
  });

}());
