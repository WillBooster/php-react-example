<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>php-react-example</title>

  <script src="index.js" defer></script>
</head>

<body>
  <h2>Like Buttons</h2>
  <div data-react-container="like_button_container"></div>
  <div data-react-container="like_button_container"></div>
  <div data-react-container="like_button_container"></div>

  <h2>Form</h2>
  <form action="/" method="POST">
    <input name="text" type="text" />
    <div data-react-container="array_input_container"></div>
    <button type="submit">Submit</button>
  </form>

  <h2>POST Parameters</h2>
  <pre><?php echo json_encode($_POST, JSON_PRETTY_PRINT) ?></pre>
</body>

</html>