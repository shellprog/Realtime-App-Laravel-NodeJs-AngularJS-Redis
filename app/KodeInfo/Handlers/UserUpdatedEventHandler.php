<?php

namespace KodeInfo\Handlers;

use Redis;
use Response;

class UserUpdatedEventHandler {

    CONST EVENT = 'users.update';
    CONST CHANNEL = 'users.update';

    public function handle($data)
    {
        $redis = Redis::connection();
        $redis->publish(self::CHANNEL, $data);

    }

} 