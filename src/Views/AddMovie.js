import AddForm from "../components/AddForm/AddForm";

const AddMovie = (props) => {
  // console.log(props);
  const navigateToHomePage = () => {
    props.history.push("/home");
  };
  return (
    <>
      <AddForm navigateToHomePage={navigateToHomePage} />
    </>
  );
};

export default AddMovie;
