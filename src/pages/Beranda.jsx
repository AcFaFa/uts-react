import React from "react";
import Card from "../components/Card.jsx";
import "../styles/Beranda.css";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
      kategori: "Laptop",
    },
    {
      id: 2,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
      kategori: "Android",
    },
    {
      id: 3,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
      kategori: "Android",
    },
    {
      id: 4,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
      kategori: "Lainnya",
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
      kategori: "Lainnya",
    },
    {
      id: 6,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
      kategori: "Android",
    },
    {
      id: 7,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
      kategori: "Laptop",
    },
    {
      id: 8,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
      kategori: "Android",
    },
    {
      id: 9,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
      kategori: "Android",
    },
    {
      id: 10,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
      kategori: "Lainnya",
    },
    {
      id: 11,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
      kategori: "Android",
    },
    {
      id: 12,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
      kategori: "Android",
    },
  ]);
  const [searchProduct, setSearchProduct] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [typeSort, setTypeSort] = useState("asc");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [page, setPage] = useState(1);
  const [ipt, setIpt] = useState({
    id: 11,
    name: "",
    harga: "",
    link: "",
    kategori: "",
  });
  // menginisialisai useNavigate agar bisa digunakan
  const navigate = useNavigate();

  // sorting product berdasarkan sortBy dan typeSort
  let productBiasa = products
    .sort((a, b) => {
      if (typeSort == "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
      // setelah disorting product akan di filter berdasarkan kondisi pencarian, minimal price, dan maksimal price
    })
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchProduct) &&
        product.price > minPrice &&
        product.price < maxPrice
    );

  //  function untuk menavigasi ke detail produk
  const toDetailProduk = (props) => {
    // cara navigasi router melalui function
    // navigate(`/detail-produk/${e}`);
    alert("Coba");
    //e merupakan id produk yang akan dikirim melalui router params
  };
  const toAddProduct = (props) => {
    setProducts(products.filter((pro) => pro.id != props));
  };
  return (
    <div>
      <div className="wrapper-action">
        <div className="add">
          <button>Add Product</button>
        </div>
        <div className="wrapper-cari">
          <label>Cari Produk</label>
          <input
            type="text"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
        <div className="wrapper-cari">
          <label>Minimal Harga</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="wrapper-cari">
          <label>Maksimal Harga</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => {
              e.target.value
                ? setMaxPrice(e.target.value)
                : setMaxPrice(Infinity);
            }}
          />
        </div>
        <div className="wrapper-cari">
          <label>Sorting By</label>
          <select
            name="sortingBy"
            id="sortingBy"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="name">Nama Produk</option>
            <option value="price">Harga Produk</option>
          </select>
        </div>
        <div className="wrapper-cari">
          <label>Type Sort</label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => setTypeSort(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="add">
          <button>Keranjang</button>
        </div>
      </div>
      <div className="wrapper-product">
        {
          // sebelum ditampilkan, di filter terlebih dahulu berdasarkan page
          // 4 disini adalah berapa product yang ditampilkan di setiap pagenya
          // _product adalah variabel param yang tidak digunakan maka ditambah _ didepan nama variabelnya
          productBiasa
            .filter((_product, i) => i < 4 * page && i >= 4 * page - 4)
            .map((product) => {
              return (
                <Card key={product.id}>
                  <img
                    className="card-img"
                    src={product.image}
                    alt={product.name}
                  />
                  <p className="card-name">{product.name}</p>
                  <p className="card-price">
                    Rp. {product.price.toLocaleString("Id-ID")}
                  </p>
                  <button
                    onClick={() => toDetailProduk(product.id)}
                    // className="btn-pagination"
                  >
                    Keranjang
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Mau Hapus? ");
                      setProducts(
                        products.filter((pro) => pro.id != product.id)
                      );
                    }}
                    // className="btn-pagination"
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => toDeleteProduk(product.id)}
                    // className="btn-pagination"
                  >
                    Edit
                  </button>
                </Card>
              );
            })
        }
      </div>
      {/* tampilan button pagination dan page yang saat ini ditampilkan  */}
      <div className="wrapper-pagination">
        <p>Produck perhalaman</p>
        <input
          type="text"
          className="input"
          name="atk"
          value={ipt.hal}
          onChange={(e) =>
            setIpt({
              ...ipt,
              hal: e.target.value,
            })
          }
        />
        <button
          onClick={() => setPage(page - 1)}
          disabled={page == 1}
          className="btn-pagination"
        >
          <BiArrowToLeft size={16} /> Sebelumnya
        </button>
        <span>{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page == Math.ceil(productBiasa.length / 4)}
          className="btn-pagination"
        >
          Selanjutnya <BiArrowToRight size={16} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Beranda;
