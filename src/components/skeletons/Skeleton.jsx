import { Wrapper } from "./styles"
import { Spinner } from "@chakra-ui/spinner"

export const Skeleton = () => {

  return (
    <Wrapper>
        <div className="skeletonCard">
            <Spinner style={{width: '75px', height: '75px', color: '#fac705'}}/>
        </div>
    </Wrapper> )
  
}
