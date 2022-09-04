export const Statistics = ({statistics}) => {
    
    const all = statistics.good + statistics.neutral + statistics.bad
    const average = (statistics.good+(-statistics.bad)) / all
    const positive = (statistics.good/all) * 100

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>good: </td>
                        <td>{statistics.good}</td>
                    </tr>
                    <tr>
                        <td>neutral: </td>
                        <td>{statistics.neutral}</td>
                    </tr>
                    <tr>
                        <td>bad: </td>
                        <td>{statistics.bad}</td>
                    </tr>
                    <tr>
                        <td>all: </td>
                        <td>{all}</td>
                    </tr>
                    <tr>
                        <td>average: </td>
                        <td>{average}</td>
                    </tr>
                    <tr>
                        <td>positive: </td>
                        <td>{positive}</td>
                    </tr>
                    </tbody>
            </table>
        </>
    );
}




                        
                        
                        
                        