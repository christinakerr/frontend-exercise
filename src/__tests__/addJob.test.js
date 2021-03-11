import { renderHook, act } from '@testing-library/react-hooks/'
import Container from "../pages/Container"


test('should add job', () => {
    const { result } = renderHook(() => Container({"location":{"pathname": "/"}}));
    console.log(result);

    // act(() => {
    //     result.current.addJob()
    // })

})  