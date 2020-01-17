<?php 
    class Rating
        {
            public $rating;

            public $name;

            public $message;

            public $date;

            function __construct($r, $n, $m)
            {
                $this->rating = $r;
                $this->name = $n;
                $this->message = $m;
                $this->date = date("d.m.Y");
            }
        }
?>