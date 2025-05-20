// type Props = {
//     title: string;
// }

interface Props {
    title: string;
}

const ArrowFunctionComponentWithProps = ({title}: Props) => {
    return <h1 className="text-center mt-12 text-xl font-bold">{title}</h1>
}

export default ArrowFunctionComponentWithProps;