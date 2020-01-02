<?php
$raw = '22.11.1968';
$start = DateTime::createFromFormat('d. m. y', $raw);

echo "Start date: " . $start->format('Y-m-d') . "\n";

// cria uma cópia de $start e adiciona um mês  e 6 dias
$end = clone $start;
$end->add(new DateInterval('P1M6D'));

$diff = $end->diff($start);
echo "Diference: " . $diff->format('%m month, %d days (total: %a days)') . "\n";
// Diferença: 1 mês, 6 dias (total: 37 dias)
