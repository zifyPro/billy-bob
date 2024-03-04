const Store = () => {
  const newProduct = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div>
      <h1>intento 2</h1>
      <Cards product={newProduct} />
    </div>
  );
};
export default Store;
