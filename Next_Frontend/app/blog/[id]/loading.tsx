

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const LoadingSkeleton = () => {
    return (
        <Card className="h-5/6 mx-10 mt-10 bg-[#e2e8f0] animate-pulse">
            <CardHeader>
                <CardTitle className="text-5xl w-3/4 bg-gray-300 h-10 rounded"></CardTitle>
            </CardHeader>
            <CardContent className="text-xl mb-20">
                <p className="bg-gray-300 h-24 rounded"></p>
            </CardContent>
            <CardFooter className="flex-row-reverse">
                <Button className="bg-gray-300 w-24 h-8 rounded"></Button>
                <Button className="bg-gray-300 w-24 h-8 rounded mx-2"></Button>
            </CardFooter>
        </Card>
    )
}

export default LoadingSkeleton
