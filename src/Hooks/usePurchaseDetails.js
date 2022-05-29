import { useEffect, useState } from "react";

const usePurchaseDetails = (productId) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://rocky-fortress-41049.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    return [product];
}
export default usePurchaseDetails;