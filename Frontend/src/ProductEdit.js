import React, { useEffect, useState } from 'react';
import './ProductEdit.css';
import { useDispatch, useSelector } from 'react-redux';
import { productDetails } from './redux/actions/allProductsActions';
import TextField from '@material-ui/core/TextField';
import Errormsg from './Errormsg'
import Loadingmsg from './Loadingmsg'
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
}));


export default function ProductEdit(props) {
  
  const {productId} = useParams() 
  const classes = useStyles();

  const [brand, setBrand] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [origprice, setOrigprice] = useState('');
  const [gender, setGender] = useState('');
  const [launch, setLaunch] = useState('');
  const [concentration, setConcentration] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [stockcount, setStockcount] = useState('');
  const [twoml,setTwoml] = useState('');
  const [fiveml,setFiveml] = useState('');
  const [tenml,setTenml] = useState('');
  const [thirtyml,setThirtyml] = useState('');
  const [retail,setRetail] = useState('');
  const [topnote1, setTopnote1] = useState('');
  const [topnote2, setTopnote2] = useState('');
  const [topnote3, setTopnote3] = useState('');
  const [middlenote1, setMiddlenote1] = useState('');
  const [middlenote2, setMiddlenote2] = useState('');
  const [middlenote3, setMiddlenote3] = useState('');
  const [basenote1, setBasenote1] = useState('');
  const [basenote2, setBasenote2] = useState('');
  const [basenote3, setBasenote3] = useState('');

  const ProductDetails = useSelector((state) => state.ProductDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(productDetails(productId));
    } else {
        setBrand(product.brand);
        setTitle(product.title);
        setUrl(product.url);
        setDescription(product.description);
        setOrigprice(product.origprice);
        setGender(product.gender);
        setLaunch(product.launch);
        setConcentration(product.concentration);
        setRating(product.rating);
        setReview(product.review);
        setStockcount(product.stockcount);
        setTwoml(product.decantprice["2ml"])
        setFiveml(product.decantprice["5ml"])
        setTenml(product.decantprice["10ml"])
        setThirtyml(product.decantprice["30ml"])
        setRetail(product.decantprice["Retail"])
        setTopnote1(product.notes.Topnotes[0])
        setTopnote2(product.notes.Topnotes[1])
        setTopnote3(product.notes.Topnotes[2])
        setMiddlenote1(product.notes.Middlenotes[0])
        setMiddlenote2(product.notes.Middlenotes[1])
        setMiddlenote3(product.notes.Middlenotes[2])
        setBasenote1(product.notes.Basenotes[0])
        setBasenote2(product.notes.Basenotes[1])
        setBasenote3(product.notes.Basenotes[2])
    }
  }, [product, dispatch, productId]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
  };
  return (
    <div className="productedit">
      <div>
          <h2 style={{color: "black"}}>Edit Product {productId}</h2>
      </div>
      <form className={classes.root} noValidate autoComplete="off"  onSubmit={submitHandler}>
        {loading ? (
        <Loadingmsg/>
      ) : error ? (
        <Errormsg variant="danger">{error}</Errormsg>
      ) : (
          <>
            <TextField 
                id="outlined-basic"
                required
                variant="outlined" 
                label="Brand"
                value={brand}
                color="secondary"
                onChange={(e) => setBrand(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Title"
                value={title}
                color="secondary"
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Gender"
                value={gender}
                color="secondary"
                onChange={(e) => setGender(e.target.value)}
            />
             <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Launch Date"
                value={launch}
                color="secondary"
                onChange={(e) => setLaunch(e.target.value)}
            />
             <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Concentration"
                value={concentration}
                color="secondary"
                onChange={(e) => setConcentration(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Stock Count"
                value={stockcount}
                color="secondary"
                onChange={(e) => setStockcount(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                fullWidth
                required
                variant="outlined" 
                label="Image Url"
                value={url}
                color="secondary"
                onChange={(e) => setUrl(e.target.value)}
            />
            <TextField 
                id="outlined-multiline-static"
                fullWidth
                required
                label="Description"
                color="secondary"
                multiline
                rows={4}
                variant="outlined"
                onChange={(e) => setDescription(e.target.value)}
            />
            
            <div>
              <h3>Notes</h3>
            </div>

            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Top Note 1"
                value={topnote1}
                color="secondary"
                onChange={(e) => setTopnote1(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Top Note 2"
                value={topnote2}
                color="secondary"
                onChange={(e) => setTopnote2(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Top Note 3"
                value={topnote3}
                color="secondary"
                onChange={(e) => setTopnote3(e.target.value)}
            />

            <br/>

            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Middle Note 1"
                value={middlenote1}
                color="secondary"
                onChange={(e) => setMiddlenote1(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Middle Note 2"
                value={middlenote2}
                color="secondary"
                onChange={(e) => setMiddlenote2(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Middle Note 3"
                value={middlenote3}
                color="secondary"
                onChange={(e) => setMiddlenote3(e.target.value)}
            />

            <br/>

            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Base Note 1"
                value={basenote1}
                color="secondary"
                onChange={(e) => setBasenote1(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Base Note 2"
                value={basenote2}
                color="secondary"
                onChange={(e) => setBasenote2(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Base Note 3"
                value={basenote3}
                color="secondary"
                onChange={(e) => setBasenote3(e.target.value)}
            />
            <div>
              <h3>Price</h3>
            </div>

            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Retail Discounted Price"
                value={retail}
                color="secondary"
                onChange={(e) => setRetail(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="2ml Price"
                value={twoml}
                color="secondary"
                onChange={(e) => setTwoml(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="5ml Price"
                value={fiveml}
                color="secondary"
                onChange={(e) => setFiveml(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="10ml Price"
                value={tenml}
                color="secondary"
                onChange={(e) => setTenml(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="30ml Price"
                value={thirtyml}
                color="secondary"
                onChange={(e) => setThirtyml(e.target.value)}
            />
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Retail Price"
                value={origprice}
                color="secondary"
                onChange={(e) => setOrigprice(e.target.value)}
            />
            <div>
              <h3>Rating</h3>
            </div>
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Rating"
                value={rating}
                color="secondary"
                onChange={(e) => setRating(e.target.value)}
            />
            <div>
              <h3>Review</h3>
            </div>
            <TextField 
                id="outlined-basic"
                required
                variant="outlined"
                label="Review"
                value={review}
                color="secondary"
                onChange={(e) => setReview(e.target.value)}
            />
          </>
        )}
      </form>
    </div>
  );
}