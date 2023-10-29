import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAvailableProducts } from "~/queries/products";

export default function Products() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";
  const { data = [], isLoading, refetch } = useAvailableProducts(filter);

  useEffect(() => {
    refetch();
  }, [filter]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (data.length === 0) return <Typography>No data</Typography>;
  return (
    <Grid container spacing={2}>
      {data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia component="img" height="250" image={`/images/${product.id}.jpg`} title={product.id} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="h2">
                {product.title}
              </Typography>
              <Typography>{formatAsPrice(product.price)}</Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={product} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
