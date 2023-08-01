new Vue({
    el: '#app',
    data: {
      searchString: '',
      activeIndex: 0,
      tags: [
        { label: '#cats', active: true, images: [] },
        { label: '#chickens', active: false, images: [] },
        { label: '#ducks', active: false, images: [] }
      ]
    },
    methods: {
      addTag(tagLabel){
        alert('search '+tagLabel)
        
        let isActive = false
        if(_.filter(this.tags, {active:true}).length==0){
          isActive = true
        }
        this.tags.push({
          label: '#'+tagLabel,
          active: isActive,
          images: []
        })
        this.searchString = ''
      },
      removeTag(tag){
        alert('remove '+tag.label)
        let isActive = tag.active
        this.tags = _.without(this.tags, tag)
        if(this.tags.length>0 && isActive){
          this.tags[0].active=true;
        }
      },
      selectTag(index){
        this.tags.forEach(function(val, key){
          val.active = false
        })
        this.tags[index].active = true
        this.activeIndex = index
      }
    }
  })