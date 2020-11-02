<?php

$post = $_POST;

$body = '';

$to = 'help@investsovetnik.net';
$subject = 'Новая форма на сайте investsovetnik.net'; 

if(isset($post['f']) && count($post['f'])) {
	foreach($post['f'] as $k => $v) {

		$body = $body . "$k: $v\n";

	}
}
$headers = 'From: robot@investsovetnik.net';

@mail($to, $subject, $body, $headers);

echo json_encode($body);