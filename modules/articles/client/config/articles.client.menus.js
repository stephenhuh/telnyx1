(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Employees',
      state: 'articles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'Employee Directory',
      state: 'articles.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'Add New Employee',
      state: 'articles.create',
      roles: ['user']
    });
  }
}());
