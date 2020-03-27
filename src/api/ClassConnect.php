<?php
abstract class ClassConnect{
    protected function connectBD(){
        try{
            $Con=new PDO("mysql:host=localhost;dbname=react_crud","fabricio", "Fabricio123");
            return $Con;
        }catch (PDOException $Erro){
            return $Erro->getMessage();
        }
    }
}