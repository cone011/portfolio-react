import classes from "./ListSkills.module.css";
import { SKILL_LIST } from "../../../utils/skillsApi";

const ListSkills = () => {};

export default ListSkills;

// SET @num1 := '16:00:50';
// SET @num2 := '21:15:00';

// SELECT A.*
// FROM(
// 	SELECT *
// 	FROM agenda_doctor A
// 	WHERE A.Fecha = '20220309'
// 	AND A.CodigoDoctor = 19
// 	and (SELECT time_format(CONVERT(@num1, TIME),'%H:%i')) BETWEEN (SELECT time_format(CONVERT(A.HoraInicio, TIME),'%H:%i')) AND (SELECT time_format(CONVERT(A.HoraFin, TIME),'%H:%i'))
// 	UNION
// 	SELECT *
// 	FROM agenda_doctor A
// 	WHERE A.Fecha = '20220309'
// 	AND A.CodigoDoctor = 19
// 	and (SELECT time_format(CONVERT(@num2, TIME),'%H:%i')) BETWEEN (SELECT time_format(CONVERT(A.HoraInicio, TIME),'%H:%i')) AND (SELECT time_format(CONVERT(A.HoraFin, TIME),'%H:%i'))
// ) A
