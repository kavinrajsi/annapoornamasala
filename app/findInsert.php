<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

  <title>Hello, world!</title>
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <?php
        $servername = "127.0.0.1";
        $username = "u2jrxhkirbxbt";
        $password = "7?F12<gl31,j";
        $dbname = "dbnlqmeiub37kt";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT id, name, dob, email, phone, addressLine1, addressLine2, city, pincode, triedMasala, findDataURL FROM `cook-with-nala-kongu-style`";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
          // output data of each row
          echo '<div class="table-responsive"><table class="table table-striped"><tbody>';
          while ($row = $result->fetch_assoc()) {
            echo "<tr><td> " . $row["id"] . "</td><td>" . $row["name"] . "</td><td>" . $row["dob"] . "</td><td>" . $row["email"] . '</td><td>' . $row["phone"] . '</td><td>' . $row["addressLine1"] . '</td><td>' . $row["addressLine2"] . '</td><td>' . $row["city"] . '</td><td>' . $row["pincode"] . '</td><td>' . $row["tryMe"] . '</td><td>' . $row['findDataURL'] . '</td></tr>';
          }
          echo '</tbody></table></div>';
        } else {
          echo "0 results";
        }

        $conn->close();
        ?>
      </div>
    </div>
  </div>
</body>

</html>
