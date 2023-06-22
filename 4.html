<!DOCTYPE html>
<html>

<head>
  <title>Shopping Complex</title>
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f7f7f7;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    label {
      font-weight: bold;
      display: block;
      margin-bottom: 10px;
    }

    input[type="text"],
    input[type="number"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }

    button:hover {
      background-color: #0056b3;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin-top: 20px;
    }

    li {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }

    li span {
      flex-grow: 1;
    }

    li button {
      margin-left: 10px;
    }

    .total-rent {
      margin-top: 20px;
      text-align: center;
      font-size: 18px;
    }
  </style>
</head>

<body>
  <div id="app"></div>

  <script type="text/babel">
    // Shop component
    class Shop extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          shops: [],
          name: '',
          rent: '',
          totalRent: 0
        };
      }

      handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }

      handleAddShop = () => {
        const { name, rent } = this.state;
        const shop = { name, rent };

        this.setState((prevState) => ({
          shops: [...prevState.shops, shop],
          name: '',
          rent: '',
          totalRent: prevState.totalRent + parseInt(rent)
        }));
      }

      handleEditShop = (index) => {
        const { shops } = this.state;
        const updatedName = prompt('Enter the new shop name:');
        const updatedRent = prompt('Enter the new rent:');

        if (updatedName && updatedRent) {
          const updatedShops = [...shops];
          const oldShop = updatedShops[index];
          const rentDiff = parseInt(updatedRent) - parseInt(oldShop.rent);

          updatedShops[index] = {
            ...oldShop,
            name: updatedName,
            rent: updatedRent
          };

          this.setState((prevState) => ({
            shops: updatedShops,
            totalRent: prevState.totalRent + rentDiff
          }));
        }
      }

      handleDeleteShop = (index) => {
        const { shops } = this.state;
        const deletedShop = shops[index];
        const updatedShops = shops.filter((_, i) => i !== index);

        this.setState((prevState) => ({
          shops: updatedShops,
          totalRent: prevState.totalRent - parseInt(deletedShop.rent)
        }));
      }

      render() {
        const { shops, name, rent, totalRent } = this.state;

        return (
          <div className="container">
            <h1>Shopping Complex</h1>
            <div>
              <label>Shop Name:</label>
              <input type="text" name="name" value={name} onChange={this.handleInputChange} placeholder="Enter shop name" />
            </div>
            <div>
              <label>Monthly Rent (in ₹):</label>
              <input type="number" name="rent" value={rent} onChange={this.handleInputChange} placeholder="Enter rent" />
            </div>
            <div>
              <button onClick={this.handleAddShop}>Add Shop</button>
            </div>
            <ul>
              {shops.map((shop, index) => (
                <li key={index}>
                  <span>{shop.name} - ₹{shop.rent}</span>
                  <button onClick={() => this.handleEditShop(index)}>Edit</button>
                  <button onClick={() => this.handleDeleteShop(index)}>Delete</button>
                </li>
              ))}
            </ul>
            <div className="total-rent">
              <strong>Total Rent: ₹{totalRent}</strong>
            </div>
          </div>
        );
      }
    }

    // Render the Shop component
    ReactDOM.render(<Shop />, document.getElementById('app'));
  </script>
</body>

</html>
