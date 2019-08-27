
interface Inputs {
    gql: string // | parsed gql document node?
    json: string
}

interface Outputs {
    html: string  // | ReactNode?
}

export default function render(inputs: Inputs): Outputs {
    throw new Error("todo.")
}