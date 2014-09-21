<?php
/**
 * Created by PhpStorm.
 * User: Imran
 * Date: 9/20/14
 * Time: 1:28 AM
 */

namespace KodeInfo;


class JSHelper {

    public function __toString()
    {
        return json_encode(['token'=>csrf_token()]);
    }

} 