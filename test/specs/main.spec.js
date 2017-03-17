(function() {
  'use strict';

let exampleObj = {content: 'Hello', createTime: '3/21', id: 'foobar'};

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

      it('should add an element for a given array object', function(){
        window.thoughter.showRecent([exampleObj]);
        let recent = document.querySelectorAll('article');
        expect(recent.length).to.equal(1);
      });

      it('should add multiple elements for more than one array object', function(){
        window.thoughter.showRecent([
          {content: 'Hey', createTime: '3/21', id: 'foobar'},
          {content: 'Hey', createTime: '3/21', id: 'foobar'},
          {content: 'Hey', createTime: '3/21', id: 'foobar'}
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

      it('should check that all tha tags exists on article', function(){
        window.thoughter.showRecent([exampleObj]);
        let articleClass = document.querySelector('article');
        expect(articleClass.classList.contains('panel', 'panel-info')).is.true;
        expect(articleClass.hasAttribute('id')).is.true;
        expect(articleClass.getAttribute('id')).to.equal('thought-foobar');
      });

      it('should contain the innerHTML header class of panel-heading', function(){
        window.thoughter.showRecent([exampleObj]);
        let headerClass = document.querySelector('header');
        expect(headerClass.classList.contains('panel-heading')).is.true;
      });

      it('should contain the thought content inside of the p tags', function(){
        window.thoughter.showRecent([exampleObj]);
        let pTag = document.querySelector('p').innerText;
        expect(pTag).to.equal('Hello');
      });

    });
  });

}());
