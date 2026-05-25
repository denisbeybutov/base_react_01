import './people.css'

const PEOPLE = [
      'Creola Katherine Johnson: mathematician',
      'Mario José Molina-Pasquel Henríquez: chemist',
      'Mohammad Abdus Salam: physicist',
      'Percy Lavon Julian: chemist',
      'Subrahmanyan Chandrasekhar: astrophysicist'
    ];

function People(props) {
    const listItem = PEOPLE.map(person => <li key={person}>{person}</li> ) 
    const {number} = props;
    return (
    <>
        <div>
            List of people number {number}: 
        </div>
        <ul>{listItem}</ul>
        
    </>
    )
}

export default People;