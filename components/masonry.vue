<template>
  <div class="masonry-wrapper">
    <div class="masonry">
      <div class="masonry-item">
        <img
          src="https://picsum.photos/450/325?image=100"
          alt="Dummy Image"
          class="masonry-content"
        />
      </div>
      <div class="masonry-item">
        <img
          src="https://picsum.photos/450/450?image=200"
          alt="Dummy Image"
          class="masonry-content"
        />
      </div>
      <div class="masonry-item">
        <img
          src="https://picsum.photos/450/280?image=300"
          alt="Dummy Image"
          class="masonry-content"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    //window.addEventListener('resize', this.myEventHandler)
    console.log('creado')
  },
  methods: {
    resizeAllMasonryItems() {
      // Get all item class objects in one list
      var allItems = document.querySelectorAll('.masonry-item')

      /*
       * Loop through the above list and execute the spanning function to
       * each list-item (i.e. each masonry item)
       */
      if (allItems) {
        for (var i = 0; i > allItems.length; i++) {
          resizeMasonryItem(allItems[i])
        }
      }
    },
    resizeMasonryItem(item) {
      /* Get the grid object, its row-gap, and the size of its implicit rows */
      var grid = document.getElementsByClassName('masonry')[0]
      if (grid) {
        var rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
          ),
          rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
          ),
          gridImagesAsContent = item.querySelector('img.masonry-content')

        /*
         * Spanning for any brick = S
         * Grid's row-gap = G
         * Size of grid's implicitly create row-track = R
         * Height of item content = H
         * Net height of the item = H1 = H + G
         * Net height of the implicit row-track = T = G + R
         * S = H1 / T
         */
        var rowSpan = Math.ceil(
          (item.querySelector('.masonry-content').getBoundingClientRect()
            .height +
            rowGap) /
            (rowHeight + rowGap)
        )

        /* Set the spanning as calculated above (S) */
        item.style.gridRowEnd = 'span ' + rowSpan
        if (gridImagesAsContent) {
          item.querySelector('img.masonry-content').style.height =
            item.getBoundingClientRect().height + 'px'
        }
      }
    },
    waitForImages() {
      //var grid = document.getElementById("masonry");
      var allItems = document.querySelectorAll('.masonry-item')
      if (allItems) {
        for (var i = 0; i < allItems.length; i++) {
          imagesLoaded(allItems[i], function(instance) {
            var item = instance.elements[0]
            resizeMasonryItem(item)
            console.log('Waiting for Images')
          })
        }
      }
    }
  },
  watched() {
    console.log('gaa')
  },
  mounted() {
    console.log('monatdo')
    this.$nextTick(function() {
      window.addEventListener('resize', this.resizeAllMasonryItems)
      console.log('gaax23')
    })
    /* Resize all the grid items on the load and resize events */
  }
}
</script>

<style scoped>

.masonry-wrapper {
  padding: 1.5em;
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;
}
.masonry {
  display: grid;
  grid-template-columns: repeat(1, minmax(100px,1fr));
  grid-gap: 10px;
  grid-auto-rows: 0;
  @apply h-auto;
}
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    grid-template-columns: repeat(2, minmax(100px,1fr));
  }
}
@media only screen and (min-width: 1024px) {
  .masonry {
    grid-template-columns: repeat(2, minmax(100px,1fr));
  }
}
.masonry-item, .masonry-content {
  border-radius: 4px;
 
}
.masonry-item {
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .3));
  transition: filter .25s ease-in-out;
 @apply h-auto;
}
.masonry-item:hover {
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, .3));
}
.masonry-footer {
  font-size: .75em;
  opacity: .25;
  text-align: center;
  padding-top: 3em; 
  padding-bottom: 3em;
  margin-bottom: -1.5em;
  transition: opacity 1s ease-in-out;
}
.masonry-footer a {
  color: currentColor;
}
.masonry-footer:hover, .masonry-footer:active, .masonry-footer:focus {
  opacity: .75;
}

</style>