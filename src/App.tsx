// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/Class/ClassComponentWithState.tsx";
import Layout from "./components/Layout.tsx";
import Counter from "./components/Counter.tsx";

function App() {

  return (
    <>
        <Layout>
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="is an Arrow Component with Props"/>*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*    title="is an Arrow Component with Props"*/}
            {/*description="This is a Description"*/}
            {/*/>*/}
            {/*<CodingFactoryLogo/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            <Counter/>
        </Layout>
    </>
  )
}

export default App
