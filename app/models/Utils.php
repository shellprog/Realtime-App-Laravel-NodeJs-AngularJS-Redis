<?php

class Utils {

    public static function buildMessages($messages){

        $response="";

        foreach($messages as $message){
            $response.="<li>{$message}</li>";
        }

        return $response;
    }

    public static function timestamp(){
        $dt = new DateTime;
        return $dt->format('Y-m-d H:i:s');
    }

    static function object_to_array($obj) {
        if(is_object($obj)) $obj = (array) $obj;
        if(is_array($obj)) {
            $new = array();
            foreach($obj as $key => $val) {
                $new[$key] = Utils::object_to_array($val);
            }
        }
        else $new = $obj;
        return $new;
    }

    static function removeTableMeta($table){
        $cols = DB::table('crud_table_rows')->where('table_name', $table->table_name)->get();

        foreach ($cols as $col) {
            if ($col->type == "radio" || $col->type == "range" || $col->type == "checkbox" || $col->type == "select") {
                DB::table("crud_table_pairs")->where("crud_table_id", $col->id)->delete();
            }
        }

        DB::table('crud_table_rows')->where('table_name', $table->table_name)->delete();
    }


} 