/*task form lesson

  <form action="">
    <div>
      <input type="text">
      <!-- here is text -->
    </div>

    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <!-- here is text -->
    </div>

    <div>
      <input type="checkbox">
      <!-- this is checked = true -->
    </div>

    <button>Submit</button>
  </form>

  <script>
    document.querySelector('form').addEventListener('submit', function (evt) {
      // if all the conditions true do noting
      // else if something is false we should do this:
      // evt.preventDefault();
    });
  </script>*/
  
var firstInput = document.querySelector('form').children[0].firstElementChild
var secondInput = document.querySelector('textarea')
var checkBox = document.querySelector('form').children[2].firstElementChild

document.querySelector('form').addEventListener('submit', function(evt) {
    if (firstInput.value === '' || secondInput.value === '' || checkBox.checked === false) {
        evt.preventDefault()
    }
});
