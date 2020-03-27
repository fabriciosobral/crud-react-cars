<?php
include("ClassConnect.php");
class ClassCars extends ClassConnect{
    public function showCars()
    {
        $BFetch=$this->connectBD()->prepare("select * from cars");
        $BFetch->execute();

        $AllCars=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $AllCars[$I]=[
                "id"=>$Fetch['id'],
                "brand"=>$Fetch['brand'],
                "year"=>$Fetch['year'],
                "model"=>$Fetch['model']
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type:application/json");
        echo json_encode($AllCars);
    }
    
}