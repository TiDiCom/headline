define(['Palace'], function(Palace) {

  return function(view, args){
    Palace.expose();

    //+ tellOthers :: Event -> Event
    var tellOthers = function(e){return emit('submit', 'Search',
      {term: $('#term').val()} )
    }

    fmap(tellOthers, on('click', '#searched'))
  };
});
